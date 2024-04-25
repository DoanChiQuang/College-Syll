import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import React, { useReducer, useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import PageOne from './pages/pageOne';
import syllReducer from './context/reducers/syllReducer';
import syllInitialState from './context/states/syllInitialState';
import PageTwo from './pages/pageTwo';
import Box from '@mui/material/Box';
import PageThree from './pages/pageThree';
import useSyll from './hooks/useSyll';
import { useNavigate } from 'react-router-dom';

const App = () => {
    const [page, setPage] = useState(1);
    const [syll, syllDispatch] = useReducer(syllReducer, syllInitialState);
    const useHook = useSyll();
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        if (page != 3 && syll.errorKeys.length == 0) {
            setPage(page + 1);
        }

        if (page == 3 && syll.errorKeys.length == 0) {
            navigate("/word", { state: { syll: syll.value } })
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <Box className="fixed z-10 top-0 left-0 right-0 p-4 bg-white shadow">
                <Box className="flex flex-col space-y-3 justify-center items-center relative">
                    <Typography variant="h5">SƠ YẾU LÝ LỊCH</Typography>
                    <Stack spacing={2} direction={'row'}>
                        <Button
                            variant={(page == 1 && 'contained') || 'outlined'}
                            onClick={() => setPage(1)}
                            disabled={page < 1}
                        >
                            Phần 1
                        </Button>
                        <Button
                            variant={(page == 2 && 'contained') || 'outlined'}
                            onClick={() => setPage(2)}
                            disabled={page < 2}
                        >
                            Phần 2
                        </Button>
                        <Button
                            variant={(page == 3 && 'contained') || 'outlined'}
                            onClick={() => setPage(3)}
                            disabled={page < 3}
                        >
                            Phần 3
                        </Button>
                    </Stack>
                    <Button
                        type="submit"
                        variant="contained"
                        color="secondary"
                        sx={{ position: 'absolute', right: 0 }}
                    >
                        Next
                    </Button>
                </Box>
            </Box>
            <Container className="flex flex-col p-4 space-y-4">
                <Box className="h-24" />
                {page == 1 && (
                    <PageOne
                        syll={syll}
                        syllDispatch={syllDispatch}
                        useHook={useHook}
                    />
                )}
                {page == 2 && (
                    <PageTwo
                        syll={syll}
                        syllDispatch={syllDispatch}
                        useHook={useHook}
                    />
                )}
                {page == 3 && (
                    <PageThree
                        syll={syll}
                        syllDispatch={syllDispatch}
                        useHook={useHook}
                    />
                )}
            </Container>
        </form>
    );
};

export default App;
