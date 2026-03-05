const { createClient } = require("@sanity/client");

// Configuration
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "6cfcbych";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";

console.log("🔧 Sanity Configuration Validation");
console.log("=====================================");
console.log(`📋 Project ID: ${projectId}`);
console.log(`📋 Dataset: ${dataset}`);
console.log(`📋 API Version: ${apiVersion}`);
console.log();

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  perspective: "published",
});

async function validateConfiguration() {
  try {
    console.log("🔍 Testing basic connection...");
    const healthCheck = await client.fetch('*[_type == "sanity.imageAsset"][0]');
    console.log("✅ Connection established successfully");

    console.log("🔍 Testing project schema...");
    const projects = await client.fetch(`
      *[_type == "project"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        client,
        mainImage,
        excerpt,
        technologies[]-> {
          _id,
          name
        },
        publishedAt
      }
    `);
    console.log(`✅ Projects query successful: Found ${projects.length} projects`);

    console.log("🔍 Testing technology schema...");
    const technologies = await client.fetch(`
      *[_type == "technology"] | order(name asc) {
        _id,
        name
      }
    `);
    console.log(`✅ Technologies query successful: Found ${technologies.length} technologies`);

    console.log("🔍 Testing blog schema...");
    const posts = await client.fetch(`
      *[_type == "post"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        excerpt,
        publishedAt
      }[0..2]
    `);
    console.log(`✅ Blog posts query successful: Found ${posts.length} posts`);

    console.log("\n🎉 All Sanity configurations are working properly!");
    console.log("\n📊 Summary:");
    console.log(`   • ${projects.length} portfolio projects`);
    console.log(`   • ${technologies.length} technologies`);
    console.log(`   • ${posts.length} blog posts (showing first 3)`);

    if (projects.length === 0) {
      console.log("\n💡 Tip: Visit /studio to add portfolio projects to your Sanity dataset");
    }

  } catch (error) {
    console.error("❌ Configuration validation failed:", error.message);
    process.exit(1);
  }
}

validateConfiguration();