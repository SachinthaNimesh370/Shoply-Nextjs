import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "@/app/components/Card";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box>
      <Header/>
      
      <Footer/>
    </Box>
  );
}
