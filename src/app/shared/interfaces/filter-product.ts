export interface FilterProduct {
    title: string,
    types:Array<
        {
            type: string
            isChecked: boolean;
        }>
    
}
