import { NextResponse } from 'next/server'

export function middleware(request) {
	const authCookie = request.cookies.get('admin_authenticated')
	const { pathname } = request.nextUrl

	// Ne pas protéger l'API de login
	if (pathname === '/api/admin/auth/login') {
		return NextResponse.next()
	}

	// Page de login
	if (pathname === '/admin/login') {
		if (authCookie?.value === 'true') {
			return NextResponse.redirect(new URL('/admin/agreements', request.url))
		}
		return NextResponse.next()
	}

	// Routes protégées
	if (pathname.startsWith('/admin') || pathname.startsWith('/api/admin')) {
		if (authCookie?.value !== 'true') {
			return NextResponse.redirect(new URL('/admin/login', request.url))
		}
	}

	return NextResponse.next()
}

export const config = {
	matcher: ['/admin/:path*', '/api/admin/:path*']
}
