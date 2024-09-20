export function cn(...strs: string[]) {
  return strs.join(" ")
}

export function dark(str: string) {
  const strs = str.split(" ").filter((s) => s)
  
  return cn(...strs.map((str) => "dark:" + str))
}

export function hover(str: string) {
  const strs = str.split(" ").filter((s) => s)
  
  return cn(...strs.map((str) => "hover:" + str))
}

export function active(str: string) {
  const strs = str.split(" ").filter((s) => s)
  
  return cn(...strs.map((str) => "active:" + str))
}