namespace :site do
  desc ""
  task :stage do
    `rm -rf _site`

    prefix = "https://"
    if ENV["TRAVIS"] and ENV["GH_TOKEN"]
      prefix << ENV["GH_TOKEN"] + "@"
    end

    remote = `git config --get remote.origin.url`.strip
    remote = prefix + remote.match(/(github\.com\/.*)/)[1]

    `git clone -b gh-pages #{remote} _site`
  end


  desc ""
  task :build do
    system "jekyll build"
  end


  desc ""
  task :deploy do
    if ENV["TRAVIS"]
      unless ENV["TRAVIS_PULL_REQUEST"] == "false"
        puts "Pull request #{ENV["TRAVIS_PULL_REQUEST"]}. Not proceeding with deploy."
        exit
      end

      unless ENV["TRAVIS_BRANCH"] == "master"
        puts "Current branch #{ENV["TRAVIS_BRANCH"]}, not master. Not proceeding with deploy."
        exit
      end
    end

    sha = `git log`.match(/[a-z0-9]{40}/)[0]
    Dir.chdir("_site") do
      `git config user.name "Tucker Whitehouse"`
      `git config user.email "TuckerWhitehouse@gmail.com"`
      `git config push.default simple`

      system "git status --short"

      `git add --all`
      `git commit -m "Updating to #{sha}."`
      `git push --quiet`

      puts "Updated to #{sha}"
    end
  end
end
