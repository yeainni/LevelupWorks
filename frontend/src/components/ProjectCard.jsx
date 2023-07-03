import styled from 'styled-components';

const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 1256px;
    margin: 50px 0;
`;

const ListCard = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    font-family: 'Nunito', sans-serif;
    height: 340px;
    width: 330px;
    margin-bottom: 100px;
    `;

const CardBox = styled.div`
    display: flex;
    flex-direction: column;
`;

const CardTitle = styled.div`
    font-size: 30px;
    font-weight: 900;
    text-align: center;
    line-height: 1;
    padding: 16px 0;
`;

const CardInfo = styled.div`
    font-size: 18px;
    font-weight: 700;
    text-align: center;
`;

export default function ProjectCard({ filteredDatas }) {
    return (
        <CardContainer>
            {filteredDatas.map((data) => (
                <ListCard key={data.id}>
                    <img src={data.project_pic} alt={data.name} />
                    <CardBox>
                        <CardTitle>{data.name} </CardTitle>
                        <CardInfo>{data.year_level.toUpperCase()} | {data.subject_matter}</CardInfo>
                    </CardBox>
                </ListCard>
            ))}
        </CardContainer>
    )
}
