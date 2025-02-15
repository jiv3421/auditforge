import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';

// eslint-disable-next-line import/extensions
import MultiSelectDropdown from '@/components/dropdown/MultiSelectDropdown';

import CheckboxButton from '../../../components/button/CheckboxButton';
import DefaultRadioGroup from '../../../components/button/DefaultRadioGroup';
import PrimaryButton from '../../../components/button/PrimaryButton';
import SelectDropdown from '../../../components/dropdown/SelectDropdown';
import SimpleInput from '../../../components/input/SimpleInput';
import {
  AuditType,
  createAuditType,
  getCustomSections,
  getLanguages,
  getTemplates,
  NewAuditType,
} from '../../../services/data';

type Language = {
  language: string;
  locale: string;
};

type Template = {
  name: string;
  ext: string;
  _id: string;
};

type NewAuditTypeFormProps = {
  onAddAuditType: (audit: AuditType) => void;
};
export const NewAuditTypeForm: React.FC<NewAuditTypeFormProps> = ({
  onAddAuditType,
}) => {
  const { t } = useTranslation();

  const [templateData, setTemplateData] = useState<Template[]>([]);
  const [customSectionsData, setCustomSectionsData] = useState<
    { field: string; name: string; icon: string }[]
  >([]);
  const [languageData, setLanguageData] = useState<Language[]>([]);

  const [loadingTemplates, setLoadingTemplates] = useState(false);
  const [loadingSections, setLoadingSections] = useState(false);
  const [loadingLanguages, setLoadingLanguages] = useState(false);

  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTemplates = async () => {
      setLoadingTemplates(true);

      try {
        const data = await getTemplates();
        setTemplateData(data.datas);
        setLoadingTemplates(false);
      } catch (err) {
        setError('Error fetching templates');
        setLoadingTemplates(false);
      }
    };

    void fetchTemplates();
  }, []);

  useEffect(() => {
    const fetchSections = async () => {
      setLoadingSections(true);

      try {
        const data = await getCustomSections();
        setCustomSectionsData(data.datas);
        setLoadingSections(false);
      } catch (err) {
        setError('Error fetching sections');
        setLoadingSections(false);
      }
    };

    void fetchSections();
  }, []);

  useEffect(() => {
    const fetchLanguages = async () => {
      setLoadingTemplates(true);

      try {
        const data = await getLanguages();
        setLanguageData(data.datas);
        setLoadingLanguages(false);
      } catch (err) {
        setError('Error fetching languages');
        setLoadingLanguages(false);
      }
    };

    void fetchLanguages();
  }, []);

  const [newAuditType, setNewAuditType] = useState<NewAuditType>({
    name: '',
    hidden: [],
    sections: [],
    stage: 'default',
    templates: [],
  });

  const handleInputChange = (name: string, value: string | object) => {
    setNewAuditType(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  /**
   * Mapea las templates a ListItem
   */
  const [templateDropdownItems, setTemplateDropdownItems] = useState<
    { id: number; label: string; value: string }[]
  >([]);
  useEffect(() => {
    setTemplateDropdownItems(
      templateData.map((template, index) => ({
        id: index,
        label: template.name,
        value: template._id,
      })),
    );
  }, [templateData]);

  const [langTemplates, setLangTemplates] = useState<
    {
      locale: string;
      id: number;
      label?: string;
      value: string;
    }[]
  >([]);

  const onChangeTemplate = (
    item: {
      id: number;
      value: string;
      label?: string;
    },
    locale: string,
  ) => {
    setLangTemplates(prevTemplates => {
      const templateExists = prevTemplates.some(
        template => template.locale === locale,
      );

      if (templateExists) {
        // Actualiza el elemento existente
        return prevTemplates.map(template =>
          template.locale === locale
            ? {
                ...template,
                value: item.value,
                label: item.label,
                locale,
              }
            : template,
        );
      } else {
        const newTemplate = {
          locale,
          id: item.id,
          label: item.label,
          value: item.value,
        };
        return [...prevTemplates, newTemplate];
      }
    });
  };

  /**
   * Actualiza newAuditType
   * al cambiar el selector de templates
   */
  useEffect(() => {
    handleInputChange(
      'templates',
      langTemplates.map(lang => ({
        name: lang.label,
        locale: lang.locale,
        template: lang.value,
      })),
    );
  }, [langTemplates]);

  /**
   * Custom Sections
   */

  const [customSections, setCustomSections] = useState<
    {
      id: number;
      value: string;
      label?: string;
    }[]
  >([]);

  const [selectedCustomSections, setSelectedCustomSections] = useState<
    {
      id: number;
      value: string;
      label?: string;
    }[]
  >([]);

  useEffect(
    () =>
      setCustomSections(
        customSectionsData.map((sect, index) => ({
          id: index,
          value: sect.field,
          label: sect.name,
        })),
      ),
    [customSectionsData],
  );

  /**
   * Hide built-in sections
   */

  const [builtInSec, setBuiltInSec] = useState({
    networkScan: false,
    findings: false,
  });

  useEffect(() => {
    const newHidden = [];
    if (builtInSec.networkScan) {
      newHidden.push('network');
    }
    if (builtInSec.findings) {
      newHidden.push('findings');
    }
    handleInputChange('hidden', newHidden);
  }, [builtInSec]);

  useEffect(() => {
    handleInputChange(
      'sections',
      selectedCustomSections.map(section => section.value),
    );
  }, [selectedCustomSections]);

  const handleSubmitAuditType = async () => {
    let res;

    try {
      res = await createAuditType(newAuditType);
    } catch (error) {
      setError('Error creating audit type');
      toast.error(t('err.failedCreateAuditType'));
      console.error('Error:', error);
      return;
    }
    setNewAuditType({
      name: '',
      hidden: [],
      sections: [],
      stage: 'default',
      templates: [],
    });
    setLangTemplates([]);
    setSelectedCustomSections([]);
    setBuiltInSec({ networkScan: false, findings: false });
    onAddAuditType(res.datas);
    toast.success(t('msg.auditTypeCreatedOk'));
  };

  useEffect(() => {
    error && console.error(error);
  }, [error]);

  return (
    <div>
      {loadingTemplates && loadingSections && loadingLanguages ? (
        <p>{t('loading')}</p>
      ) : (
        <>
          <div className="text-xl">{t('addAuditType')}</div>
          <SimpleInput
            id="name"
            name="name"
            onChange={e => handleInputChange('name', e)}
            placeholder={t('name')}
            type="text"
            value={newAuditType.name}
          />
          <div className="pt-4 pb-2">
            <div className="text-lg">{t('auditPhase')}</div>
            <DefaultRadioGroup
              name="stage"
              onChange={e => handleInputChange('stage', e)}
              options={[
                { id: '1', label: t('default'), value: 'default' },
                { id: '2', label: t('retest'), value: 'retest' },
                { id: '3', label: t('multi'), value: 'multi' },
              ]}
              value={newAuditType.stage}
            />
          </div>
          <div className="pb-4">
            <div className="text-lg">{t('templates')}</div>
            {languageData.map(lang => (
              <SelectDropdown
                items={templateDropdownItems}
                key={lang.language}
                onChange={item => onChangeTemplate(item, lang.locale)}
                selected={
                  templateDropdownItems.find(
                    item =>
                      item.value ===
                      langTemplates.find(lt => lt.locale === lang.locale)
                        ?.value,
                  ) ?? null
                }
                title={`${lang.language} ${t('template')}`}
              />
            ))}
          </div>
          <div className="pb-4">
            <MultiSelectDropdown
              items={customSections}
              onChange={setSelectedCustomSections}
              placeholder={t('customSections')}
              selected={selectedCustomSections}
              title={t('customSections')}
            />
          </div>
          {newAuditType.stage === 'default' ? (
            <div className="py-2">
              <div className="text-lg">{t('hideBuiltInSections')}</div>
              <div className="py-2">
                <CheckboxButton
                  checked={builtInSec.networkScan}
                  onChange={() =>
                    setBuiltInSec({
                      ...builtInSec,
                      networkScan: !builtInSec.networkScan,
                    })
                  }
                  text={t('networkScan')}
                />
              </div>
              <div className="py-2">
                <CheckboxButton
                  checked={builtInSec.findings}
                  onChange={() =>
                    setBuiltInSec({
                      ...builtInSec,
                      findings: !builtInSec.findings,
                    })
                  }
                  text={t('findings')}
                />
              </div>
            </div>
          ) : null}

          <PrimaryButton onClick={() => handleSubmitAuditType()}>
            {t('btn.create')}
          </PrimaryButton>
        </>
      )}
    </div>
  );
};
