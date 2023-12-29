import envvar from 'env-var';
const { get } = envvar;

export const envs = {
  PORT: get('PORT').required().asPortNumber(),
};
