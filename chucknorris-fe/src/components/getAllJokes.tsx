import { useQuery, gql } from "@apollo/client";
import { useState } from "react";

const GET_CATEGORIES = gql`
    query Query($category: String!) {
        categories
        randomJoke(category: $category)
    }
`;

function Categories() {
    const [category, setCategory] = useState("dev");
    const { loading, error, data, refetch } = useQuery(GET_CATEGORIES, {
        variables: { category },
    });

    if (loading) return <p className="text-center mt-6">Loading...</p>;
    if (error) return <p>Error...</p>;

    const handleClick = (newCategory: string) => {
        setCategory(newCategory);
        refetch();
    };

    return (
        <div className="flex flex-col text-center gap-6">
            <div className=" flex w-full justify-between px-6 flex-wrap mt-6">
                {data.categories.map((category: string) => (
                    <button
                        key={category}
                        className=""
                        onClick={() => {
                            handleClick(category);
                        }}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div>{data.randomJoke}</div>
        </div>
    );
}

export default Categories;
