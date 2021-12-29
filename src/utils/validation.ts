const ErrorMessages = {
  required: '入力してください',
  checkbox_required: '選択してください',
  email: '正しいメールアドレスを入力してください',
  url: '正しいURLを入力してください',
  password_length: 'パスワードは8文字以上で入力してください',
  password_confirm: '同じパスワードを入力してください',
}

const Regex = {
  email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  url: /^https?:\/\/[\w/:%#$&?()~.=+-]+/,
}

export const required = (value: any) => (value || typeof value === 'number' ? undefined : ErrorMessages.required)

export const checkbox_required = (value: any) => (value || typeof value === 'number' ? undefined : ErrorMessages.checkbox_required)

export const email = (value: any) => (value && !Regex.email.test(value) ? ErrorMessages.email : undefined)

export const url = (value: any) => (value && !Regex.url.test(value) ? ErrorMessages.url : undefined)

export const password_length = (value: any) => (value && value.length < 8 ? ErrorMessages.password_length : undefined)

export const password_confirm = (value: any, form: any) => (value && value !== form.password ? ErrorMessages.password_confirm : undefined)
