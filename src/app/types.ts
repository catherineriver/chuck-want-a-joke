export interface StateProps {
  status: 'idle' | 'pending' | 'succeeded' | 'failed'
  joke: JokeTypes
  categories: string[]
  previousCategory: string
  error?: string | null
}

export interface RandomJokeState {
  status: 'idle' | 'pending' | 'succeeded' | 'failed'
  joke: JokeTypes
  error?: string | null
}

export interface JokeTypes {
  value: string | null
  category?: string
}

export interface ActionTitleProps {
  categories: string[]
  previousCategory: string
}
