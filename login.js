<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pratinjau Halaman Login</title>
  <!-- Memuat Tailwind CSS untuk tata letak yang bersih dan responsif -->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- Font Inter untuk keterbacaan modern -->
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Inter', sans-serif;
    }
  </style>
</head>
<body class="bg-slate-100 min-h-screen flex items-center justify-center p-4">

  <!-- Container Utama: Tampilan Halaman Login -->
  <div id="loginView" class="w-full max-w-md bg-white rounded-2xl shadow-lg border border-slate-200 p-6 sm:p-8 transition-all duration-300">
    <!-- Header Form -->
    <div class="text-center mb-6">
      <div class="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-600 text-white mb-3 shadow-sm">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      </div>
      <h1 class="text-2xl font-bold text-slate-800">Masuk ke Akun</h1>
      <p class="text-sm text-slate-500 mt-1">Silakan lengkapi data verifikasi di bawah ini</p>
    </div>

    <!-- Form Login sesuai ID pada kode JavaScript -->
    <form id="loginForm" class="space-y-4" novalidate>
      <!-- Input Gmail -->
      <div>
        <label for="gmail" class="block text-sm font-medium text-slate-700 mb-1">Alamat Gmail</label>
        <input 
          type="email" 
          id="gmail" 
          placeholder="contoh@gmail.com"
          class="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          required
        >
      </div>

      <!-- Input Password -->
      <div>
        <label for="password" class="block text-sm font-medium text-slate-700 mb-1">Password</label>
        <div class="relative">
          <input 
            type="password" 
            id="password" 
            placeholder="Masukkan password"
            class="w-full px-4 py-2.5 pr-11 rounded-xl border border-slate-300 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            required
          >
          <button 
            type="button" 
            id="togglePasswordBtn"
            aria-label="Tampilkan atau sembunyikan password"
            class="absolute inset-y-0 right-0 px-3 flex items-center text-slate-400 hover:text-slate-600 focus:outline-none cursor-pointer"
          >
            <!-- Ikon Mata (Tampilkan) -->
            <svg id="eyeIcon" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <!-- Ikon Mata Dicoret (Sembunyikan) -->
            <svg id="eyeOffIcon" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Input Tempat, Tanggal Lahir -->
      <div>
        <label for="ttl" class="block text-sm font-medium text-slate-700 mb-1">Tempat, Tanggal Lahir</label>
        <input 
          type="text" 
          id="ttl" 
          placeholder="Contoh: Salatiga, 17 Agustus 2008"
          class="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          required
        >
      </div>

      <!-- Input Tempat, Tanggal Lahir -->
      <div>
        <label for="ttl" class="block text-sm font-medium text-slate-700 mb-1">Tempat, Tanggal Lahir</label>
        <input 
          type="text" 
          id="ttl" 
          placeholder="Contoh: Jakarta, 17 Agustus 2000"
          class="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          required
        >
      </div>

      <!-- Elemen Pesan Status sesuai ID loginMessage -->
      <div class="min-h-[24px] flex items-center justify-center text-center pt-1">
        <p id="loginMessage" class="text-sm font-medium"></p>
      </div>

      <!-- Tombol Submit -->
      <button 
        type="submit" 
        class="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold rounded-xl shadow-sm transition cursor-pointer"
      >
        Login
      </button>
    </form>

    <!-- Panel Bantu Uji Coba (Untuk memudahkan simulasi) -->
    <div class="mt-6 pt-5 border-t border-slate-100">
      <div class="bg-slate-50 rounded-xl p-3.5 border border-slate-200/80 text-xs text-slate-600 space-y-2">
        <div class="flex items-center justify-between">
          <span class="font-semibold text-slate-700">Data Valid di Kode:</span>
          <button 
            type="button" 
            id="fillValidBtn"
            class="px-2.5 py-1 bg-slate-200 hover:bg-slate-300 text-slate-800 font-medium rounded-lg transition cursor-pointer"
          >
            Isi Otomatis
          </button>
        </div>
        <ul class="space-y-1 text-slate-500">
          <li>• Gmail: <code class="text-slate-700 font-mono">kelompok9@gmail.com</code></li>
          <li>• Password: <code class="text-slate-700 font-mono">tugaszTR167</code></li>
          <li>• TTL: <code class="text-slate-700 font-mono">Salatiga, 17 Agustus 2008</code></li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Simulasi Halaman index.html setelah Redirect Berhasil -->
  <div id="dashboardView" class="hidden w-full max-w-md bg-white rounded-2xl shadow-lg border border-emerald-200 p-6 sm:p-8 text-center">
    <div class="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </div>
    <span class="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full mb-2">
      Simulasi: index.html
    </span>
    <h2 class="text-2xl font-bold text-slate-800">Selamat Datang, Kelompok 9!</h2>
    <p class="text-xs font-mono text-emerald-700 bg-emerald-50 border border-emerald-200/80 rounded-lg py-1.5 px-3 inline-block mt-2">
      kelompok9@gmail.com
    </p>
    <p class="text-sm text-slate-600 mt-3 leading-relaxed">
      Kode <code class="bg-slate-100 px-1.5 py-0.5 rounded text-slate-800">window.location.href = "index.html"</code> berhasil dijalankan karena seluruh input valid.
    </p>
    <button 
      type="button" 
      id="resetPreviewBtn"
      class="mt-6 w-full py-2.5 px-4 bg-slate-800 hover:bg-slate-900 text-white text-sm font-semibold rounded-xl transition cursor-pointer"
    >
      Kembali ke Halaman Login
    </button>
  </div>

 