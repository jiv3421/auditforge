/* eslint-disable import/extensions */
import { Cvss3P1 } from 'ae-cvss-calculator';
import { BarChart, Globe, List, Plus, Settings } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet, useParams } from 'react-router-dom';

import { getCustomSections, Section } from '@/services/data';

import AuditSidebar from '../../../components/navbar/AuditSidebar';
import { AuditSection, Finding, getAuditById } from '../../../services/audits';

export const AuditRoot = () => {
  const { t } = useTranslation();
  const { auditId } = useParams();
  const [activeItem, setActiveItem] = useState(t('generalInformation'));
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [sortBy, setSortBy] = useState<{ id: number; value: string } | null>(
    null,
  );
  const [sortOrder, setSortOrder] = useState('Descending');

  const [findings, setFindings] = useState<
    {
      id: number;
      name: string;
      category: string;
      severity: string;
      identifier: string;
    }[]
  >([]);

  const menuItems = [
    { name: t('generalInformation'), icon: Settings, value: 'general' },
    {
      name: t('dashboard'),
      icon: BarChart,
      value: 'dashboard',
    },
    { name: t('networkScan'), icon: Globe, value: 'network' },
    {
      name: t('findings'),
      icon: List,
      additionalIcon: Plus,
      value: 'findings/add',
    },
  ];

  const cvssStringToSeverity = (cvssScore: string) => {
    try {
      const cvssVector = new Cvss3P1(cvssScore);
      const score = cvssVector.calculateExactOverallScore();
      if (score >= 9.0) {
        return 'C';
      }
      if (score >= 7.0) {
        return 'H';
      }
      if (score >= 4.0) {
        return 'M';
      }
      if (score >= 0.1) {
        return 'L';
      }
    } catch (error) {
      console.error('Invalid CVSS vector:', error);
    }
    return 'I';
  };
  const [auditSections, setAuditSections] = useState<AuditSection[]>([]);
  const [sections, setSections] = useState<Section[]>([]);
  const [isListVisible, setIsListVisible] = useState(false);

  useEffect(() => {
    getCustomSections()
      .then(section => {
        setSections(
          section.datas.map((item: Section) => ({
            field: item.field,
            name: item.name,
            icon: item.icon,
          })),
        );
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    getAuditById(auditId)
      .then(audit => {
        setAuditSections(
          audit.datas.sections.map((section: AuditSection) => {
            const matchingSection = sections.find(
              s => s.field === section.field && s.name === section.name,
            );

            return {
              field: section.field,
              name: section.name,
              _id: section._id,
              customFields: section.customFields,
              icon: matchingSection?.icon ?? undefined,
            };
          }),
        );
        setFindings(
          audit.datas.findings.map((finding: Finding) => {
            return {
              id: finding.identifier,
              name: finding.title,
              category: 'No Category',
              severity: cvssStringToSeverity(finding.cvssv3),
              identifier: finding._id,
            };
          }),
        );
      })
      .catch(console.error);
  }, [auditId, sections]);

  const sortOptions = [{ id: 1, value: 'CVSS Score', label: t('cvssScore') }];

  const sortOrderOptions = [
    { id: 'desc', label: t('descending'), value: 'Descending' },
    { id: 'asc', label: t('ascending'), value: 'Ascending' },
  ];

  const connectedUsers: { id: number; name: string; online: boolean }[] = [];

  return (
    <div className="flex overflow-hidden">
      <AuditSidebar
        activeItem={activeItem}
        auditSections={auditSections}
        connectedUsers={connectedUsers}
        findings={findings}
        isCollapsed={isCollapsed}
        isListVisible={isListVisible}
        menuItems={
          findings.length > 0
            ? menuItems
            : menuItems.filter(item => item.value !== 'dashboard')
        }
        sections={sections}
        setActiveItem={setActiveItem}
        setIsCollapsed={setIsCollapsed}
        setIsListVisible={setIsListVisible}
        setSortBy={setSortBy}
        setSortOrder={setSortOrder}
        sortBy={sortBy}
        sortOptions={sortOptions}
        sortOrder={sortOrder}
        sortOrderOptions={sortOrderOptions}
      />
      <div className="flex-1 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};
