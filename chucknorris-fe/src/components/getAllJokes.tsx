import { useQuery, gql } from "@apollo/client";

const GET_CATEGORIES = gql`
    query GetCategories {
        categories
    }
`;

function Categories() {
    const { loading, error, data } = useQuery(GET_CATEGORIES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.categories.map((category: string) => (
        <div key={category}>{category}</div>
    ));
}

export default Categories;
