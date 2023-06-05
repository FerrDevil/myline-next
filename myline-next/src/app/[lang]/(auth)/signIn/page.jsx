import { getAuthDictionary } from "@/services/auth/dictionaries/dictionaries";
import SignIn from "@/services/auth/pages/SignIn";


export default async function RegisterPage({params: { lang }} ) {
  const dictionary = await getAuthDictionary(lang)
  return(
    <SignIn dictionary={dictionary.signInForm}/>
  )
}

