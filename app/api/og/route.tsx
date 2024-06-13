import {ImageResponse} from '@vercel/og';
// App router includes @vercel/og.
// No need to install it.

export async function GET(request: Request) {
    try {
        const {searchParams} = new URL(request.url);

        // ?title=<title>
        const hasTitle = searchParams.has('title');
        const title = hasTitle
            ? searchParams.get('title')?.slice(0, 100)
            : 'Hayashi Pool';

        return new ImageResponse(
            (
                <div
                    style={{
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        textAlign: 'center',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        flexWrap: 'nowrap',
                        backgroundColor: 'white',
                        backgroundImage: 'radial-gradient(circle at 25px 25px, lightgray 2%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%)',
                        backgroundSize: '100px 100px',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <svg width="160" height="160" viewBox="0 0 160 160" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M39.8289 152L39.8289 8" stroke="#0D452A" strokeWidth="15" strokeLinecap="round"/>
                            <path d="M8 122.167L39.8672 48.2666" stroke="#0D452A" strokeWidth="15"
                                  strokeLinecap="round"/>
                            <path d="M8 48.2612H72.4278" stroke="#0D452A" strokeWidth="15" strokeLinecap="round"/>
                            <path d="M67.0374 92.9306L40.6639 48.2667" stroke="#0D452A" strokeWidth="15"
                                  strokeLinecap="round"/>
                            <path d="M119.401 152L119.401 8" stroke="#0D452A" strokeWidth="15" strokeLinecap="round"/>
                            <path d="M84.492 130.253L118.669 48.2612" stroke="#0D452A" strokeWidth="15"
                                  strokeLinecap="round"/>
                            <path d="M87.5722 48.2612H152" stroke="#0D452A" strokeWidth="15" strokeLinecap="round"/>
                            <path d="M152 122.167L120.133 48.2666" stroke="#0D452A" strokeWidth="15"
                                  strokeLinecap="round"/>
                        </svg>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            fontSize: 40,
                            fontStyle: 'normal',
                            color: 'black',
                            marginTop: 30,
                            lineHeight: 1.8,
                            whiteSpace: 'pre-wrap',
                        }}
                    >
                        <b>{title}</b>
                    </div>
                </div>

            ),
            {
                width: 1200,
                height: 630,
            },
        );
    } catch (e: any) {
        console.log(`${e.message}`);
        return new Response(`Failed to generate the image`, {
            status: 500,
        });
    }
}