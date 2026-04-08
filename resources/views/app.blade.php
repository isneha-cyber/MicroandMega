<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title inertia>{{ config('app.name', 'Micro & Mega') }}</title>
<link rel="canonical" href="{{url()->current()}}" />
        <link rel="icon" href="/images/logo.png" type="image/png"/>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Frank+Ruhl+Libre:wght@300..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Oswald:wght@200..700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Racing+Sans+One&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
<meta name="ahrefs-site-verification" content="7eb25ce4e4aac443feb22288743d5e6cde6cefe87534bc8e6677c258f7a44099">
        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])

        <!-- ✅ MUST be last — injects all <Head> tags from React/Inertia -->
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia



     <nav class="sr-only" aria-label="Site navigation index">
    <!-- Main Pages -->
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/service">Service</a>
    <a href="/contact">Contact</a>

    <!-- Products -->
    <a href="/products/ul-listed-fire-alarm">UL Listed Fire Alarm</a>
    <a href="/products/ai-based-cctv">AI Based CCTV</a>
    <a href="/products/en-listed-fire-alarm">EN Listed Fire Alarm</a>

    <!-- Projects -->
    <a href="/project-details/hotel-mgfr-2">Hotel MGFR Project</a>
    <a href="/project-details/flip-resort-3">Flip Resort Project</a>
    <a href="/project-details/hotel-rrgr-4">Hotel RRGR Project</a>
    <a href="/project-details/hotel-varnabas-5">Hotel Varnabas Project</a>
    <a href="/project-details/department-of-passport-6">Department of Passport Project</a>
    <a href="/project-details/nast-7">NAST Project</a>
</nav>
    </body>
</html>