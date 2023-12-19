
import Container from '@mui/material/Container';
import { Box } from '@mui/material';
import CoinTable from "./components/CoinTable";
import { Nav } from "./Nav";

function Home() {

    const rows = [
        { coin: 'ICP', rate: '47,000' },
        { coin: 'SNS-1', rate: '3,400' },
        // ... other rows
    ];
    return (
        <>
            <Nav />
            <Container>
                <Box mt={4}> <CoinTable rows={rows} />
                </Box>

            </Container>

        </>

    );
}

export default Home;
