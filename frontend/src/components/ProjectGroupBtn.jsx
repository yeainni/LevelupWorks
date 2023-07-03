import React from 'react'
import styled from 'styled-components';

const BtnList = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const BtnWrap = styled.div`
    
`;

const BtnShow = styled.div`
    
`;


export default function ProjectGroupBtn() {
    return (
        <BtnList>
            <BtnWrap>
                <BtnShow>BEGINNER</BtnShow>
                <BtnShow>INTERMEDIATE</BtnShow>
                <BtnShow>ADVANCED</BtnShow>
            </BtnWrap>
            <BtnWrap>
                <BtnShow>5</BtnShow>
                <BtnShow>10</BtnShow>
                <BtnShow>All</BtnShow>
            </BtnWrap>
        </BtnList>
    )
}
