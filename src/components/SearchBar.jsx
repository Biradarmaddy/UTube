import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
 
  const handleSubmit = (e)=>{
       e.preventDefault();

       if(searchTerm){
          navigate(`/search/${searchTerm}`);

          setSearchTerm('');
       }
  }

  return (
    <div>
      <Paper
        component="form"
        onSubmit={handleSubmit}
        sx={{
          borderRadius: 20,
          border: "2px solid #e3e3e3",
          pl: 4,
          boxShadow: "none",
          mr: { sm: 5 },
          text: "center",
        }}
      >
        <input
          className="search-bar"
          placeholder="Search...."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
          <Search />
        </IconButton>
      </Paper>
    </div>
  );
};

export default SearchBar;
