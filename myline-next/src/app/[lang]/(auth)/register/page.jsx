import { getAuthDictionary } from "@/services/auth/dictionaries/dictionaries";
import Register from "@/services/auth/pages/Register";

export default async function RegisterPage({params: { lang }} ) {

  const dictionary = await getAuthDictionary(lang)

  return(
    <Register dictionary={dictionary.registerForm}/>
  )
}
