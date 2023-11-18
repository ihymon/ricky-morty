import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../CharacterList/CharacterList.css'
export default function CharacterList() {
    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(1);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`);
                setCharacters(response.data.results);

            } catch (error) {
                console.error(`Error fetching data: ${error}`);
            }
        }
        fetchData();
    }, [page])


    const handlePageChange = (newPage) => {
        setPage(newPage);
    }
    return (
        <div>
            <h1>Richy and Morty Characters</h1>
            <ul>
                {characters.map((character) => (
                    <div key={character.id}>
                        <h2>{character.name}</h2>
                        <img src={character.image} alt={character.id} />
                    </div>
                ))}
            </ul>
            <div>
                <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>Previous page</button>
                <span>{page}</span>
                <button onClick={() => handlePageChange(page + 1)}>Next page</button>
            </div>
        </div>
    )
}
