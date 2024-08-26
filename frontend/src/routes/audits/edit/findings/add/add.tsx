import { useEffect, useState } from "react";
import { t } from "i18next";
import SelectDropdown from "../../../../../components/dropdown/SelectDropdown";
import UITable, { Column } from "../../../../../components/table/UITable";
import { useSortableTable } from "../../../../../hooks/useSortableTable";
import { useTableFiltering } from "../../../../../hooks/useTableFiltering";
import PrimaryButton from "../../../../../components/button/PrimaryButton";
import { FindingByLocale, getLanguages, getVulnByLanguage } from "../../../../../services/audits";

interface ListItem {
  id: number;
  value: string;
  label?: string;
}

type LanguagesData = {
  language: string;
  locale: string;
};

const column1: Column = {
  header: "ID",
  accessor: "id",
  sortable: true,
  filterable: true,
};

const column2: Column = {
  header: "Title",
  accessor: "title",
  sortable: true,
  filterable: true,
};

const column3: Column = {
  header: "Category",
  accessor: "category",
  sortable: false,
  filterable: true,
};

const column4: Column = {
  header: "Type",
  accessor: "type",
  sortable: false,
  filterable: true,
};

const getVulnColumns = () => [column1, column2, column3, column4]


export const Add = () => {

  const [languages, setLanguages] = useState<ListItem[]>([]);
  const [currentLanguage, setCurrentLanguage] = useState<any>(null);
  const [loadingLanguages, setLoadingLanguages] = useState<boolean>(true);

  const [columns, setColumns] = useState<Column[]>([]);

  const [filteredData, setFilteredData] = useState<FindingByLocale[]>([]);

  const [tableData, handleSorting, setTableData] = useSortableTable<FindingByLocale>(
    filteredData,
    columns,
  );

  const [filters, handleFilterChange] = useTableFiltering<FindingByLocale>(
    filteredData,
    columns,
    setTableData,
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataLanguage = await getLanguages();
        const languagesName = dataLanguage.datas.map(
          (item: LanguagesData, index: number) => ({
            id: index,
            value: item.locale,
            label: item.language,
          })
        );
        setLanguages(languagesName);
        setLoadingLanguages(false);

        const dataColumns = getVulnColumns();
        setColumns(dataColumns);

        const vulns = await getVulnByLanguage(currentLanguage.value);

        const vulnsName = vulns.datas.map(
          (item: FindingByLocale) => ({
            id: item._id,
            title: item.detail.title
            }
          )
        );

        setTableData(vulnsName);
        setFilteredData(vulnsName);

      } catch (err) {
        setLoadingLanguages(false);
      }
    };
    fetchData();
  }, [currentLanguage]);

  return (
    <div className="min-h-screen bg-gray-800 pt-16">
      <div className="bg-gray-800 flex justify-center items-center">
        <div className="w-full max-w-4xl bg-gray-900 shadow-lg rounded-lg p-8 mt-6">

          <div className="flex justify-between">
              <div className=" w-1/2">
                {!loadingLanguages && (
                  <SelectDropdown
                    title={t("language")}
                    items={languages}
                    selected={currentLanguage}
                    onChange={setCurrentLanguage}
                  />
                )}
              </div>

              <div className="">
                <PrimaryButton
                  onClick={() => {}}
                >
                  {t("newVulnerability")}
                </PrimaryButton>
              </div>
            </div>

            <div className="mt-5">
              <UITable
                columns={columns}
                data={tableData}
                keyExtractor={(item) => item._id}
                sortable={true}
                onSort={handleSorting}
                emptyState={t("noAudits")}
                filters={filters}
                onFilter={handleFilterChange}
              />
            </div>
          </div>
        </div>
      </div>
  );
};

