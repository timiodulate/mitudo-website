import { Footer } from "@/components/versionOne/layouts/Footer";
import Navbar from "@/components/versionTwo/layouts/Header/Navbar";
import LoadingDetail from "@/components/versionTwo/sections/projectDetails/Loading";
import { Box } from "@chakra-ui/react";

// HydrateFallback is rendered while the client loader is running
export default function HydrateFallback() {
	return <LoadingDetail />;
}
