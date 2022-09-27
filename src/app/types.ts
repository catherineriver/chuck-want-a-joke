export interface StateProps {
  status: 'idle' | 'pending' | 'succeeded' | 'failed'
  joke: JokeTypes
  categories: string[]
  previousCategory: string
}

export interface RandomJokeState {
  status: 'idle' | 'pending' | 'succeeded' | 'failed'
  joke: JokeTypes
}

export interface JokeTypes {
  value: string
  category?: string
}

export interface ActionTitleProps {
  categories: string[]
  previousCategory: string
}
