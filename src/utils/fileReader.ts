/* Load a file's text
   filePath: string -> url of file
   returns: promise containing the text of the file or the error
 */
export function loadFileText(filePath: string): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    fetch(filePath)
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((reason) => reject(reason))
  })
}
