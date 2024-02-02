export async function getResolvedAsyncComponent(Component: any, props?: any) {
    const ResolvedComponent = await Component(props)
    return () => ResolvedComponent
}

it("has at least one test", ()=>{})