namespace :pokemon do
  task parse_pokedex: :environment do
    p 'start parsing pokedex'
    pokemon_hash = {}
    File.open("raw_pokedex.txt", "r") do |f|
      f.each_line do |line|
        row = line.split(' ')
        pokemon_hash[row[1]] = {
          number: row[0],
          types: ([] << row[2] << row[3]).compact,
        }
      end
    end    
    # this was used to generate constant called POKEMON_BY_NAME
    # p "{"
    # pokemon_hash.each do |key, info|
    #   puts "\"#{key.downcase}\": #{info[:number].to_i}"
    # end
    # p "}"

    # Now generating pokemon options
    pokemon_hash.each do |key, info|
      puts "{ key: #{info[:number].to_i}, value: #{info[:number].to_i}, text: \"#{key}\" },"
    end


    p 'done parsing pokedex'
  end
end