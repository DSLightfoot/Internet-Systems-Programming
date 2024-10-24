export default async function ServerComponentUserList(): Promise<JSX.Element|Error> {
    const url = "https://www.usemodernfullstack.dev/api/v1/users";
    let data: responseItemType[] | [] = [];
    let names: responseItemType[] | [];
    try {
        const response = await fetch(url, {cache: "force-cache"});
        data = (await response.json()) as responseItemType[];
    } catch (err) {
        throw new Error("Failed to fetch data");
    }
    names = data.map((item) => {
        return {id: item.id, name: item.name};
    });

    return (
        <ul>
            {names.map((item) => (
                <li id="{item.id}" key="{item.id}">
                    {item.name}
                </li>
            ))}
        </ul>
    );
}