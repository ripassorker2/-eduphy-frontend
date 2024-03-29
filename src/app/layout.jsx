import ThemeProviders from "@/providers/ThemeProviders";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {Toaster} from "react-hot-toast";
import {AuthProvider} from "@/context/AuthProvider";

export const metadata = {
    title: "Edupy academy",
    description: "Generated by create next app",
};

export default function RootLayout({children}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="dark:bg-primaryBg bg-secondaryBg dark:text-secondaryText text-gray-900">
                <ThemeProviders>
                    <AuthProvider>
                        <Toaster position="bottom-right" />
                        <Header />
                        {children}
                        <Footer />
                    </AuthProvider>
                </ThemeProviders>
            </body>
        </html>
    );
}
