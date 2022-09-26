export interface StateProps {
    joke: Joke,
    status: 'idle' | 'pending' | 'succeeded' | 'failed'
}

export type Joke = {
    value: string,
    categories: string,
}
