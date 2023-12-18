import { useQuery, gql } from "@apollo/client";

const GET_CATEGORIES = gql`
    query Query {
        categories
        randomJoke(category: "dev")
    }
`;

function Categories() {
    const { loading, error, data } = useQuery(GET_CATEGORIES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error </p>;
    console.log(data.randomJoke);
    return (
        <div className="flex flex-col text-center gap-6">
            <div className=" flex w-full justify-between px-6 flex-wrap mt-6">
                {data.categories.map((category: string) => (
                    <div key={category} className=" cursor-pointer">
                        {category}
                    </div>
                ))}
            </div>
            <div>
                {data.randomJoke}
            </div>
        </div>
    );
}

export default Categories;
