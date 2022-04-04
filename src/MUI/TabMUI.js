import * as React from 'react';
import { Box, Tab, Tabs } from "@mui/material";


function TabMUI() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return(
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <Tabs value={value} onChange={handleChange} centered>
                <Tab label="Kappaleet" />
                <Tab label="Artistit" />
            </Tabs>
        </Box>
    )
}

export default TabMUI;