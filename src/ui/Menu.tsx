
export default function Menu({title, items}: {title:string | number, items:any}) {
    return (
      <section>
              <nav className="grid gap-y-4 md:gap-y-4">
                <h6 className=" text-lg text-white">
                {title}
                </h6>
                <nav>
                  <ul className="grid gap-y-4 md:gap-y-2">
                      {items.map((item:any,key:any) => (
                          <li key={key}>
                              <a href="#" className="text-sm text-white">
                                  {item.title}
                              </a>
                          </li>
                      ))}
                  </ul>
                </nav>
              </nav>
      </section>
    )
  }
  