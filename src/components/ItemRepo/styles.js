import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 80%;

    h3 {
        font-size: 28px;
        color: #FAFAFA;
        display: inline-block;
        margin-bottom:6px
    }

    p {
        font-size:16px;
        color: #FAFAFA60;
        margin-bottom:20px;
    }

`
export const Divide = styled.div`
display: inline-block;
width: 100%;
height: 1px;
background-color: #464f5b;
`

export const Link = styled.a`
color: #FFFFFF;
margin-top:20px;
padding:0;
border:1px solid #464f5b;
border-radius:5px;
display: inline-block;
text-decoration: none;
padding:7px 15px;
margin-right:15px
`

export const Remove = styled.button`
color: #FFFFFF;
margin-top:20px;
background-color: #ff0000;
padding:10px 15px;
border:0;
border-radius:5px;
display: inline-block;
`