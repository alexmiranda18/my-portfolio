import { AppBar, MenuItem, styled, Toolbar } from "@mui/material"


const NavBar = () => {
    const StyledToolBar = styled(Toolbar)(() => ({
        display: "flex",
        justifyContent: "flex-end",

    }))

    return (
        <>
            <AppBar position="absolute">
                <StyledToolBar>
                    <MenuItem>Sobre</MenuItem>
                    <MenuItem>Skils</MenuItem>
                    <MenuItem>Projetos</MenuItem>
                </StyledToolBar>
            </AppBar>
        </>
    )
}

export default NavBar