import Card from "../../components/card/Card"
import { t } from "i18next"
import PrimarySwitch from "../../components/switch/PrimarySwitch"
import { useEffect, useState } from "react"
import SelectDropdown from "../../components/dropdown/SelectDropdown"
import { getSettings } from "../../services/settings"
import { useTranslation } from "react-i18next"

const languageOptions = [
    {
        id: 1,
        value: 'en-US'
    },
    {
        id: 2,
        value: 'de-DE'
    },
    {
        id: 3,
        value: 'fr-FR'
    },
    {
        id: 4,
        value: 'zh-CN'
    },
]

// QUITAR ESTO

const data = await getSettings();


export const Settings = () => {
    const [enabled, setEnabled] = useState(false)
    const [selected, setSelected] = useState({ id: 1, value: 'Tom Cook' })
    
    // <---------------------
    // Lógica de selector de idiomas. TODO: Moverlo a componente

    const { i18n } = useTranslation()

    var storedLanguage = localStorage.getItem("system_language");

    if (!storedLanguage) {
        storedLanguage = "en-US"
    }

    const [language, setLanguage] = useState({
        id: languageOptions.find(item => item.value === storedLanguage)?.id || 1,
        value: storedLanguage
    })


    useEffect(()=>{
        i18n.changeLanguage(language.value)
        localStorage.setItem("system_language", language.value)
    },[language])

    // --------------------->

    return (
        <div className="w-2/3 mt-8 mx-auto">
            <Card
                title={t('generalSettings')}
            >
                <div className="px-2">
                    <h2>{t('changeDisplayLanguage')}</h2>
                    
                    <div className="mt-2 mx-2">
                        <SelectDropdown 
                            title={t('changeDisplayLanguageInfo')} 
                            items={languageOptions}
                            selected={language}
                            onChange={setLanguage}
                        />
                    </div>
                </div>
            </Card>
            <Card
                title={t('generalSettings')}
            >
                <div className="px-2">
                    <h2>{t('changeDisplayLanguage')}</h2>
                    <div className="mt-2 mx-2">
                        <p>{t('changeDisplayLanguageInfo')}</p>
                    </div>
                    <div className="mt-2 mx-2">
                        <PrimarySwitch enabled={enabled} onChange={setEnabled}/>
                        <SelectDropdown title="Título select" items={[
                            { id: 1, value: 'Tom Cook' },
                            { id: 2, value: 'Wade Cooper' },
                            { id: 3, value: 'Tanya Fox' },
                            { id: 4, value: 'Arlene Mccoy' },
                            { id: 5, value: 'Devon Webb' },
                            ]}
                            selected={selected}
                            onChange={setSelected}
                        />
                    </div>
                    <p>
                        Persona seleccionada: {selected.value}
                    </p>
                    <div>
                        data: {JSON.stringify(data.datas)}
                    </div>
                </div>
            </Card>
        </div>
    )
}