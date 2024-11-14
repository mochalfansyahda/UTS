// Import modul Deno untuk mengelola file
const fileName = "sample.txt";

// Fungsi untuk membaca file secara asynchronous
async function readFileAsync(file: string): Promise<void> {
    try {
        // Membaca isi file secara asynchronous dan mengubahnya ke string
        const data = await Deno.readTextFile(file);
        console.log("Isi file:");
        console.log(data);
    } catch (error) {
        console.error("Terjadi kesalahan saat membaca file:", error);
    }
}

// Panggil fungsi untuk membaca file
readFileAsync(fileName);