/* eslint-disable import/extensions */
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import {
  AuditSectionById,
  getAuditById,
  getAuditSectionById,
  getLanguages,
  updateAuditSectionById,
} from '@/services/audits';

import AuditCustomFields from './AuditCustomFields';

type LanguageData = {
  language: string;
  locale: string;
};

type ListItem = {
  id: number;
  value: string;
  label?: string;
  icon?: string;
};

type TransformedField = {
  description: string;
  display: string;
  displaySub: string;
  fieldType: string;
  label: string;
  offset: number;
  text: {
    locale: string;
    value: string;
  }[];
  options: {
    locale: string;
    value: string;
  }[];
  required: boolean;
  size: number;
  _id: string;
};

export const Sections = () => {
  const [currentCustomFields, setCurrentCustomFields] = useState<
    TransformedField[]
  >([]);
  const [languagesList, setLanguagesList] = useState<ListItem[]>([]);
  const [auditLanguage, setAuditLanguage] = useState<string | null>(null);
  const [currentLanguage, setCurrentLanguage] = useState<ListItem>();
  const [dataAuditSection, setDataAuditSection] = useState<AuditSectionById>();

  const auditId = useParams().auditId;
  const sectionId = useParams().sectionId;

  const fetchLanguages = async () => {
    try {
      const dataLanguage = await getLanguages();
      const languageNames = dataLanguage.datas.map(
        (item: LanguageData, index: number) => ({
          id: index,
          value: item.locale,
          label: item.language,
        }),
      );
      setLanguagesList(languageNames);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const fetchAudit = useCallback(async () => {
    try {
      const audit = await getAuditById(auditId);
      setAuditLanguage(audit.datas.language);
    } catch (error) {
      console.error('Error:', error);
    }
  }, [auditId]);

  const fetchAuditSections = useCallback(async () => {
    if (!currentLanguage) {
      return;
    }

    try {
      const auditSectionResponse = await getAuditSectionById(
        auditId,
        sectionId,
      );

      setDataAuditSection(auditSectionResponse.datas);
    } catch (error) {
      console.error('Error:', error);
    }
  }, [auditId, sectionId, currentLanguage]);

  useEffect(() => {
    if (dataAuditSection && currentLanguage) {
      const transformedFields = dataAuditSection.customFields.map(field => ({
        description: field.customField.description,
        display: field.customField.display,
        displaySub: field.customField.displaySub,
        fieldType: field.customField.fieldType,
        label: field.customField.label,
        offset: field.customField.offset,
        text: Array.isArray(field.text)
          ? field.text.map(textItem => ({
              locale: currentLanguage.value,
              value: textItem,
            }))
          : [{ locale: currentLanguage.value, value: field.text }],
        options: field.customField.options.map(optionItem => ({
          locale: optionItem.locale,
          value: optionItem.value,
        })),
        required: field.customField.required,
        size: field.customField.size,
        _id: field.customField._id,
      }));
      setCurrentCustomFields(transformedFields);
    }
  }, [dataAuditSection, currentLanguage]);

  useEffect(() => {
    void fetchLanguages();
  }, []);

  useEffect(() => {
    void fetchAudit();
  }, [fetchAudit]);

  useEffect(() => {
    if (currentLanguage) {
      void fetchAuditSections();
    }
  }, [currentLanguage, fetchAuditSections]);

  useEffect(() => {
    if (auditLanguage && languagesList.length > 0) {
      const matchedLanguage = languagesList.find(
        language => language.label === auditLanguage,
      );
      setCurrentLanguage(matchedLanguage);
    }
  }, [auditLanguage, languagesList]);

  const handleSave = () => {
    if (!dataAuditSection) {
      return;
    }

    const transformedFields = currentCustomFields.map(field => {
      const { text, ...customField } = field;

      const textValues = text.map(item => item.value).flat();
      const formattedText =
        customField.fieldType === 'checkbox' ||
        customField.fieldType === 'select-multiple'
          ? textValues
          : textValues.length === 1
            ? textValues[0]
            : textValues;

      return {
        customField,
        text: formattedText,
      };
    });

    const payload = {
      customFields: transformedFields,
      field: dataAuditSection.field,
      name: dataAuditSection.name,
      _id: dataAuditSection._id,
    };

    void updateAuditSectionById(auditId, sectionId, payload);
  };

  return (
    <div className="p-4">
      {currentLanguage ? (
        <AuditCustomFields
          currentLanguage={currentLanguage}
          fields={currentCustomFields}
          onSave={handleSave}
          setCurrentCustomFields={setCurrentCustomFields}
        />
      ) : null}
    </div>
  );
};
