using build

class Build : BuildGroup
{
  new make()
  {
    childrenScripts =
    [
      `helloJsStep3/build.fan`,
      `helloJsStep3Demo/build.fan`,
    ]
  }
}
