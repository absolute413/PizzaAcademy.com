module CNAME
  class Generator < Jekyll::Generator
    def generate(site)
      url = site.config['url']
      url = url.match(/^https?:\/\/(.*[^\/])\/?$/)[1]
      baseurl = site.config['baseurl']

      if url and (!baseurl or baseurl == '')
        File.write(File.join(site.dest, 'CNAME'), url + "\n")
        site.keep_files << 'CNAME'

        puts "CNAME: #{url}"
      end
    end
  end
end
