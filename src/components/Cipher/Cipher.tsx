import './Cipher.scss'

const STANDARD_BACON: Record<string, string> = {
    a: "AAAAA",
    b: "AAAAB",
    c: "AAABA",
    d: "AAABB",
    e: "AABAA",
    f: "AABAB",
    g: "AABBA",
    h: "AABBB",
    i: "ABAAA",
    j: "ABAAB",
    k: "ABABA",
    l: "ABABB",
    m: "ABBAA",
    n: "ABBAB",
    o: "ABBBA",
    p: "ABBBB",
    q: "BAAAA",
    r: "BAAAB",
    s: "BAABA",
    t: "BAABB",
    u: "BABAA",
    v: "BABAB",
    w: "BABBA",
    x: "BABBB",
    y: "BBAAA",
    z: "BBAAB",
  }
  
  // I/J and U/V combined version
  const COMBINED_BACON: Record<string, string> = {
    a: "AAAAA",
    b: "AAAAB",
    c: "AAABA",
    d: "AAABB",
    e: "AABAA",
    f: "AABAB",
    g: "AABBA",
    h: "AABBB",
    i: "ABAAA",
    j: "ABAAA",
    k: "ABABA",
    l: "ABABB",
    m: "ABBAA",
    n: "ABBAB",
    o: "ABBBA",
    p: "ABBBB",
    q: "BAAAA",
    r: "BAAAB",
    s: "BAABA",
    t: "BAABB",
    u: "BABAA",
    v: "BABAA",
    w: "BABBA",
    x: "BABBB",
    y: "BBAAA",
    z: "BBAAB",
  }

const Cipher = () => {
    return (
        <>
            <div className="cipher bg-gray-700 rounded px-7 py-5 mt-10">
                    <h3 className='text-white text-3xl text-center font-bold'>Cipher Key</h3>
                    <div className='keys pt-5'>
                        <table className='w-full caption-bottom text-lg'>
                            <thead className='[&_tr]:border-b'>
                                <tr className='h-12 px-4 text-left align-middle font-medium text-muted-foreground '>
                                    <th className='h-12 px-4 text-left   align-middle font-medium text-muted-foreground  '>Letter</th>
                                    <th className='h-12 px-4 text-left align-middle font-medium text-muted-foreground  '>Code</th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr className='h-12 px-4 text-left align-middle font-medium text-muted-foreground '>
                                    <th className='h-12 px-4 text-left align-middle font-medium text-muted-foreground '>a</th>
                                    <th className='h-12 px-4 text-left align-middle font-medium text-muted-foreground '>AAAAA</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
            </div>
        </>
    )
}

export default Cipher;