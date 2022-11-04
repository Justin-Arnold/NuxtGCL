import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
    theme: {
        extend: {
            colors: {
                primary: {
                    light: '#c0c9fb',
                    core: '#4F6AFA',
                    dark: '#2a398c'
                },
                neutral: {
                    light: '#e2e8f1',
                    dark: '#3c3c3c'
                }
            }
        }
    }
}