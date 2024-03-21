import { useContext, useState} from "react";
import PasswordContext from '../../store/password-context';

const SearchForm = () => {

    const passwordCtx = useContext(PasswordContext);
    const [title, setTitle] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        if(e.target.search.value === ''){
            return setTitle("Enter Valid Value!!!")
        }else{
            const a = passwordCtx.passwords.filter(ele => {
                return  ele.title === e.target.search.value
              });

              if(a.length === 0){
                return setTitle("Password not found")
              }
              const str = a[0].title + ": " +a[0].password
           
           setTitle(str);
        }
       
       
    }


    return (
        <>
        <form onSubmit={handleSubmit}>
        <label>Search Password: </label>
        <input type="text" name="search" />
        <button type='submit'>Search</button>
        </form>
        <div>
            <h3> {title}</h3>
        </div>
        </>
    )
}

export default SearchForm;