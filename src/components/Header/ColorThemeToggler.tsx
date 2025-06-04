import { IconButton } from "@chakra-ui/react";
import { useColorMode } from "../ui/color-mode";
import { BiMoon, BiSun } from "react-icons/bi";

const ColorThemeToggler = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<IconButton
			aria-label="Toggle color mode"
			onClick={toggleColorMode}
			variant="ghost"
			borderRadius="full"
		>
			{colorMode === "light" ? <BiSun /> : <BiMoon />}
		</IconButton>
	);
};

export default ColorThemeToggler;
