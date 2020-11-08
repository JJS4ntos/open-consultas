import styled from 'styled-components'
import PropagateLoader from "react-spinners/PropagateLoader"

export const ResultContainer = styled.div`
    max-width: 1024px;
    margin: 0 auto;
`

export const MatchedWord = styled.span`
    border-bottom: 3px solid #e7bb41;
`

export const TextArea = styled.textarea`
    min-height: 120px;
    display: block;
    margin: auto;
    width: 70%;
    border-radius: 5px;
    border-color: transparent;
    webkit-box-shadow: 0px 1px 28px 0px rgba(50,50,50,0.1);
    -moz-box-shadow: 0px 1px 28px 0px rgba(50,50,50,0.1);
    box-shadow: 0px 1px 28px 0px rgba(50,50,50,0.1);
    padding: 15px 10px;
    font-weight: bold;
`

export const Button = styled.button`
    display: block;
    margin: 35px auto;
    background: #446df6;
    border: none;
    padding: 15px 45px;
    border-radius: 7px;
    color: white;
    font-size: 14px;
    transition: background 0.3s;

    &:hover {
        cursor: pointer;
        background: #ec9a29;
    }
`

export const TitleContainer = styled.div`
    width: 70%;
    margin: 0 auto;
`

export const Paragraph = styled.p`
    margin-bottom: 25px;
`

export const LoadContainer = styled.div`
    & {
        width: auto;
        position: relative;
        div {
            position: absolute;
            left: 29%;
            right: 0;
        }
    }
`

export const Spinner = styled(PropagateLoader)`
    margin: auto;
`

export const MatchCount = styled.span`
    font-size: 13px;
    float: right;
`

export const EmptyMessage = styled.p`
    text-align: center;
    border-bottom: 2px solid #e7bb41;
    display: table;
    margin: auto;
`