export interface FilterProduct {
    title: string,
    types:[
        {
            type: string
            isChecked: boolean;
        }
    ]
}
