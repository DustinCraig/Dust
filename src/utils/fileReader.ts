export function loadFileText(filePath: string): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    fetch(filePath)
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((reason) => reject(reason))
  })
}
