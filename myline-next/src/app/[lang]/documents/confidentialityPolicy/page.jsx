import { getProfileDictionary } from "@/app/[lang]/documents/dictionaries/dictionaries";
import PDFReader from "@/components/PDFReader/PDFReader";





export default async function ConfidentialityPolicyPage({params: {lang}}) {
    const dictionary = (await getProfileDictionary(lang)).appointmentPage
    return (
        <PDFReader url="/pdf/sample.pdf"/>
    )
}