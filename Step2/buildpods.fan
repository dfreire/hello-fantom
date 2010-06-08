using build

class Build : BuildGroup
{
  new make()
  {
    childrenScripts =
    [
      `helloJsStep2/build.fan`,
      `helloJsStep2Demo/build.fan`,
    ]
  }
}
