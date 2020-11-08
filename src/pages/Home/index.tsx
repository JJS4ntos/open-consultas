import React, { useState } from 'react'
// @ts-ignore
import { Tabbordion, TabPanel, TabLabel, TabContent } from 'react-tabbordion'
import reactStringReplace from 'react-string-replace'
import '../../assets/css/styles.css';
import { css } from "@emotion/core";
import { 
    ResultContainer, 
    TextArea, 
    Button, 
    TitleContainer, 
    Paragraph, 
    LoadContainer,
    Spinner,
    MatchCount,
    MatchedWord
} from './Home'

const host = 'http://openconsultas-com-br.umbler.net'

interface Disease {
    disease_name: string;
    match_count: number;
    symptoms: string[];
    match_words: string[];
}

const blockElements = {
    animator: 'accordion-animator',
    content: 'accordion-content',
    panel: 'accordion-panel',
    label: 'accordion-title'
}

const Home = () => {
    const [question, setQuestion] = useState('')
    const [diseases, setDiseases] = useState<Disease[]>()
    const [loading, setLoading] = useState(false)
    
    const loadDiseases = () => {
        if( question.length > 0 ) {
            setLoading(true)
            fetch(`${host}/diseases`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    question
                })
            })
            .then(result => result.json())
            .then(diseasesResult => {
                setDiseases(diseasesResult)
                setLoading(false)
            })
            .catch(e => {
                setLoading(false)
                console.log(e)
            })
        } else {
            alert('O campo de sintomas não pode estar vazio')
        }
    }

    const renderDiseaseSymptom = (index: number, symptom: string, matches: string[]) => {
        let component: any = symptom;
        for( const word of matches ) {
            component = reactStringReplace(component, new RegExp(`\\b(${word})\\b`, "ig"), (match, i) => (
                <MatchedWord key={i}>{match}</MatchedWord>
            ))
        }
        return  <li key={index}>
                    {component}
                </li>
    }

    const renderDiseases = (diseases: Disease[] | undefined) => {
        if(!diseases) {
            return (
                <p></p>
            )
        }
        return (
            <ResultContainer>
                <Tabbordion blockElements={blockElements} className="tabs" name="tabs">
                    {
                        diseases.map((item, index) => 
                            <TabPanel key={index}>
                                <TabLabel>
                                    { item.disease_name }
                                    <MatchCount>
                                        Itens semelhantes: { item.match_count }
                                    </MatchCount>
                                </TabLabel>
                                <TabContent>
                                    <ul>
                                        {
                                            item.symptoms.map((symptom, index) => 
                                                renderDiseaseSymptom(index, symptom, item.match_words)
                                            )
                                        }
                                    </ul>
                                </TabContent>
                            </TabPanel>
                        )
                    }
                </Tabbordion>
            </ResultContainer>
        )
    }

    return (
        <div>
            <TitleContainer>
                <h1>Demonstração - Open Medical Screening</h1>
                <Paragraph>
                    Neste exemplo doenças serão listadas de acordo com os sintomas informados.
                    As doenças terão ordem de quantidade de matches ( quantidade de palavras chaves encontradas ).
                </Paragraph>
            </TitleContainer>
            <TextArea placeholder="Descreva os seus sintomas..." onChange={(event) => setQuestion(event.target.value)}></TextArea>
            {
                !loading && <Button onClick={loadDiseases}>
                                Procurar doenças associadas
                            </Button>
            }
            {
                renderDiseases(diseases)
            }
            <LoadContainer>
                <Spinner 
                    size={20}
                    color={"#446df6"}
                    loading={loading}
                />
            </LoadContainer>
        </div>
    )
}

export default Home

