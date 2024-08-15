import { Box,Typography, styled } from '@mui/material';

export const PageStyled = styled(Box)`
    padding: 24px;
`;

export const Page = (props) => <PageStyled>
    {props.title && <Typography sx={{mb: 3}} variant="h1">{props.title}</Typography>}
    {props.children}
</PageStyled>;
